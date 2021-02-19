import * as React from 'react';
import classnames from 'classnames';
import * as styles from './AccordionItem.scss';
import { Container } from '../../modules/Container/Container';
import ILocalContainerProps from '../../../common/structures/ILocalContainerProps';
import AnimateHeight from 'react-animate-height';
import { CaretIcon, CheckmarkMixedIcon } from '../../icons/Icons';

const animationStateClasses = {
	animating: 'AccordionItem_Content__animating',
	animatingUp: 'AccordionItem_Content__animatingUp',
	animatingDown: 'AccordionItem_Content__animatingDown',
	animatingToHeightZero: 'AccordionItem_Content__animatingToHeightZero',
	animatingToHeightAuto: 'AccordionItem_Content__animatingToHeightAuto',
	animatingToHeightSpecific: 'AccordionItem_Content__animatingToHeightSpecific',
	static: 'AccordionItem_Content__static',
	staticHeightZero: 'AccordionItem_Content__staticHeightZero',
	staticHeightAuto: 'AccordionItem_Content__staticHeightAuto',
	staticHeightSpecific: 'AccordionItem_Content__staticHeightSpecific',
}

interface PropsBase extends ILocalContainerProps {
	children: React.ReactNode & {props?: any[]} | null;
	clickArea?: 'icon' | 'all';
	icon?: boolean | React.ReactNode;
	itemId?: string;
	onToggle?: (id: PropsControlled['itemId'] | undefined) => void;
}

interface PropsControlled extends PropsBase {
	opened: boolean;
}

const AccordionItemControlled: React.FC<PropsControlled> = ({
	children,
	className,
	clickArea = 'icon',
	container,
	icon = true,
	id,
	itemId,
	onToggle,
	opened,
	style,
}) => {
	const onClick = (_: React.MouseEvent<HTMLElement>) => {
		if (clickArea !== 'all') {
			// accordion callback
			onToggle?.(itemId);
		}
	};
	const onClickSummary = (event: React.MouseEvent<HTMLElement>) => {
		if (clickArea === 'all') {
			// accordion callback
			onToggle?.(itemId);
		}
	};

	const TagSummary: any = clickArea === 'all' ? 'button' : 'div';

	return (
		<Container {...container}>
			<div
				className={classnames(
					styles.AccordionItem,
					'AccordionItem',
					className,
				)}
				id={id}
				style={style}
			>
				<>
					{/* need to unwrap children because of potential extra 'child' wrapper (plus this works with fragments) */}
					{ React.Children.map(children?.props?.children || children, (child: React.ReactNode, index: number) => {
						switch(index) {
							case 0:
								return (
									<TagSummary
										className={classnames(
											styles.AccordionItem_Summary,
											'AccordionItem_Summary',
											{
												[styles.AccordionItem_Summary__ClickAreaAll]: clickArea === 'all',
												['AccordionItem_Summary__ClickAreaAll']: clickArea === 'all',
											}
										)}
										onClick={onClickSummary}
									>
										{React.cloneElement(child as React.ReactElement, {})}
										{/* don't render if icon is disabled otherwise this can be tabbed to */}
										{icon !== false && (
											<button
												className={classnames(
													styles.AccordionItem_Summary_Action,
													'AccordionItem_Summary_Action',
													{
														// allow developers to override for custom open/close styles
														['AccordionItem_Summary_Action__Opened']: opened,
													}
												)}
												onClick={onClick}
												type="button"
											>
												{!opened && icon === true && (
													<CaretIcon />
												)}
												{opened && icon === true && (
													<CheckmarkMixedIcon width={14} height={3} />
												)}
												{typeof icon === "object" && (
													<>
														{icon}
													</>
												)}
											</button>
										)}
									</TagSummary>
								);
							case 1:
								return (
									<AnimateHeight
										animationStateClasses={animationStateClasses}
										className={classnames(
											'AccordionItem_Content',
										)}
										duration={ 200 }
										height={ opened ? 'auto' : 0 }
									>
										{child}
									</AnimateHeight>
								);
							default:
								return React.cloneElement(child as React.ReactElement, {});
						}
					})}
				</>
			</div>
		</Container>
	);
};

interface PropsUncontrolled extends PropsBase {
	openedDefault?: boolean,
}

const AccordionItemUncontrolled: React.FC<PropsUncontrolled> = ({
	openedDefault,
	onToggle,
	...otherProps
}) => {
	const [isOpen, setIsOpen] = React.useState(openedDefault ?? false);

	const onClick = (itemId: PropsBase['itemId']) => {
		// toggle open state
		setIsOpen((isOpen) => !isOpen);

		// call optional callback
		onToggle?.(itemId);
	};

	return <AccordionItemControlled opened={isOpen} onToggle={onClick} {...otherProps} />;
};

function instanceOfPropsControlled(object: any): object is PropsControlled {
    return 'opened' in object;
}

/**
 * This is a factory of sorts that determines whether to use the controlled or uncontrolled variation.
 * Uses controlled-specific prop(s) to determine whether the parent is trying to "control" state or not.
 */
const AccordionItem : React.FC<PropsControlled | PropsUncontrolled> = (props) => {
	return instanceOfPropsControlled(props) ? (
		<AccordionItemControlled
			{...props}
		/>
	) : (
		<AccordionItemUncontrolled
			{...(props)}
		/>
	);
};

export default AccordionItem;

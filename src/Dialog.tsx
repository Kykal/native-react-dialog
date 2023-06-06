//React
import React from "react";


//Styles
import './Dialog.css';


//Typings
type Dialog = React.DialogHTMLAttributes<HTMLDialogElement> & {
	onClose: () => void;
	open: boolean;
	children?: any;
}
type NewAttributes = React.DialogHTMLAttributes<HTMLDialogElement> & {
	onClose?: () => void;
	open?: boolean;
	children?: any;
}


//Main component content
const Dialog = (props: Dialog): JSX.Element => {

	//React
	const ref = React.useRef<HTMLDialogElement>(null);
	const id = React.useId();


	const newAttributes: NewAttributes = {...props};
	const className = props!.className ? `native-react-dialog ${props!.className}` : 'native-react-dialog';

	delete newAttributes.onClose;
	delete newAttributes.open;
	delete newAttributes.children;
	delete newAttributes.className;


	React.useEffect( () => {

		if( props.open ) {
			ref.current?.showModal();
			document.body.style.overflow = 'hidden';
			return;
		}

		ref.current?.close();
		document.body.removeAttribute('style');
	}, [props.open] );


	//Handlers
	const _isBetween = ( min: number, target: number, max: number ): boolean => {
		return min<=target && target<=max;
	}

	const _onClose = (event: React.MouseEvent<HTMLDialogElement>) => {
		const current = ref.current!;
		const yLimits = {
			min: current.offsetTop!,
			max: current.offsetTop! + current.offsetHeight!,
		};
		const xLimits = {
			min: current.offsetLeft!,
			max: current.offsetLeft! + current.offsetWidth!,
		}

		const isInsideX: boolean = _isBetween( xLimits.min, event.clientX, xLimits.max );
		const isInsideY: boolean = _isBetween( yLimits.min, event.clientY, yLimits.max );

		const isInsideDialog: boolean = isInsideX && isInsideY;

		if( isInsideDialog ){
			return;
		}

		props.onClose();
	}

	//Main component render
	return (
		<>
			{props.open && (
				<dialog
					id={id}
					ref={ref}
					onClick={_onClose}
					className={className}
					{...newAttributes}
				>
					{props.children}
				</dialog>
			)}
		</>
	);
};


export default Dialog; //Export main component

//React
import React from "react";


//Typings
type Modal = React.DialogHTMLAttributes<HTMLDialogElement> & {
	onClose: () => void;
	open: boolean;
	children?: any;
}


//Main component content
const Modal = (props: Modal): JSX.Element => {

	//React
	const ref = React.useRef<HTMLDialogElement>(null);
	const id = React.useId();

	React.useEffect( () => {

		if( props.open ) {
			ref.current?.showModal();
			document.body.style.overflow = 'hidden';
			return;
		}

		ref.current?.close();
		document.body.removeAttribute('style');
	}, [props.open] );

	//Main component render
	return (
		<dialog
			id={id}
			ref={ref}
			{...props}
		>
			{props.children}
		</dialog>
	);
};


export default Modal; //Export main component

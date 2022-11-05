import { GoBackButton } from "../Buttons/components/GoBackButton";
import { NewInvoiceForm } from './components/NewInvoiceForm/index';

interface FormRenderProps {
  type: string;
}

export function FormRender({ type }: FormRenderProps) {
  const getFormComponent = () => {
    switch (type) {
      case 'NewInvoice':
        return <NewInvoiceForm />;
        break;
      case 'EditInvoice':
        return <></>;
        break
      default:
        return null;
        break;
    };
  };

  const handleClickInForm = (event: any) => {
    event.stopPropagation()
  };

  return (
    <section
      onClick={handleClickInForm}
      role={"form"}
      className="bg-white dark:bg-eerieBlack overflow-hidden w-full md:max-w-[600px] lg:max-w-[750px] h-full grow pb-4 px-10 pt-8 lg:ml-[-20px] md:px-14 lg:px-20 md:rounded-r-[20px] scrollbar-thin scrollbar-thumb-lavender dark:scrollbar-thumb-yankeesBlue-400 scrollbar-thumb-rounded-full scrollbar-track-none scroll-mr-4">
      {getFormComponent()}
    </section>
  );
}
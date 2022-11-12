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
      className="bg-white dark:bg-eerieBlack overflow-hidden w-full relative md:max-w-[600px] lg:max-w-[750px] h-full grow lg:ml-[-20px] md:rounded-r-[20px] pr-2 pt-4">
      {getFormComponent()}
    </section>
  );
}
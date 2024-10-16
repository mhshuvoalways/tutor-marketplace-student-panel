import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export default function MyModal({
  dialogBtn,
  isOpen,
  setIsOpen,
  dialogTitle,
  children,
}) {
  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>{dialogBtn}</Button>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={() => setIsOpen(!isOpen)}
      >
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto font-outfit">
          <div className="flex min-h-full items-center justify-center p-5 shadow">
            <DialogPanel
              transition
              className="w-full max-w-md rounded bg-white p-5 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-xl font-medium border-b pb-2"
              >
                {dialogTitle}
              </DialogTitle>
              <div className="mt-5">{children}</div>
              <div className="flex justify-end mt-5">
                <Button
                  className="btn py-2 px-5 text-base bg-primary/90 hover:bg-primary text-white font-semibold"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Send
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      {isOpen && (
        <p className="bg-black opacity-5 fixed -top-5 bottom-0 right-0 left-0 z-40 transition duration-300"></p>
      )}
    </>
  );
}

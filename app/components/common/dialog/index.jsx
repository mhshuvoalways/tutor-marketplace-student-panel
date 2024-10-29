import Button1 from "@/app/components/common/button/Button1";
import { modelHandler } from "@/store/features/reviewSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export default function MyModal({
  dialogBtn,
  dialogTitle,
  children,
  submitHandler,
}) {
  const dispatch = useAppDispatch();
  const { isOpen, isLoading } = useAppSelector((store) => store.review);
  return (
    <>
      <Button onClick={() => dispatch(modelHandler())}>{dialogBtn}</Button>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={() => dispatch(modelHandler())}
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
              <Button1
                title={"Submit"}
                onClick={submitHandler}
                className={"mt-5"}
                isClicked={isLoading}
              />
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

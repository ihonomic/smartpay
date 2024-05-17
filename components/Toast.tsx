import Toast, { ToastData, ToastOptions } from "react-native-toast-message";

type ToastType = "info" | "error" | "success";

// Toast library defined ToastType type as a string so this fix is for a better DX
export const notificationToaster = (
  type: ToastType,
  options: Omit<ToastOptions & ToastData, "type">
) => {
  Toast.show({
    type,
    ...options,
  });
};

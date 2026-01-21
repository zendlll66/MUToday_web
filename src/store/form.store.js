import { create } from "zustand";

const useFormStore = create((set) => ({
    form: {
        email: "",
        firstName: "",
        lastName: "",
        username: "",
        password: "",
    },
    setForm: (form) => set({ form }),

    setField: (field, value) =>
        set((state) => ({
            form: {
                ...state.form,
                [field]: value
            }
        })),


    resetForm: () => set({
        form: {
            email: "",
            firstName: "",
            lastName: "",
            username: "",
            password: "",
        }
    }),
}));



export default useFormStore;

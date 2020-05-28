const reducer = (state: any, arg: any) => {
  return {
    ...state,
    [arg.field]: arg.value,
  };
};

export { reducer };

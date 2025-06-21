const loadCustomHook = async (hook: string, owner: string) => {
  const mod = await import(
    `../hooks/${hook}/${owner}-${hook}.tsx`
  );
  return mod.default;
};

export default loadCustomHook;

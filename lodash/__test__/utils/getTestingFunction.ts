async function getTestingFunction() {
  const name = process.env.TEST_NAME;
  const owner = process.env.TEST_OWNER;

  if (!name || !owner) {
    throw new Error("Name and owner are required");
  }

  const mod = await import(`../src/${name}/${owner}-${name}.ts`);
  return mod.default;
}

export default getTestingFunction;

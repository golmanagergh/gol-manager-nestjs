let componentLoader;
let Components;

async function initializeComponents() {
  const module = await import('adminjs');
  const { ComponentLoader } = module;
  componentLoader = new ComponentLoader();

  Components = {
    Dashboard: componentLoader.add('Dashboard', './dashboard'),
    // other custom components
  };
}

initializeComponents();

export { Components, componentLoader };

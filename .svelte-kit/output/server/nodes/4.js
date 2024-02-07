import * as server from '../entries/pages/sverdle/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.jBtvr1-m.js","_app/immutable/chunks/scheduler.O8VUTp4Y.js","_app/immutable/chunks/index.j2K9MSZv.js","_app/immutable/chunks/entry.Hx_wQ3Ea.js","_app/immutable/chunks/index.Czk_y0aN.js"];
export const stylesheets = ["_app/immutable/assets/4.zpJKtCAG.css"];
export const fonts = [];

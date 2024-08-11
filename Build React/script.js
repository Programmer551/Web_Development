/** @jsx h */
function h(nodeName, attributes, ...args) {
  let children = args.length ? [].concat(...args) : null;

  return { nodeName, attributes, children };
}

// const vnode = h("div", { id: "best" }, h("h1", null, "My Heading"))
function render(vnode) {
  // Strings just convert to #text Nodes:

  if (vnode.split) return document.createTextNode(vnode);

  // create a DOM element with the nodeName of our VDOM element:
  let n = document.createElement(vnode.nodeName);

  // copy attributes onto the new node:
  let a = vnode.attributes || {};
  Object.keys(a).forEach((k) => n.setAttribute(k, a[k]));

  // render (build) and then append child nodes:
  (vnode.children || []).forEach((c) => n.appendChild(render(c)));

  return n;
}
// // const vdom = (
// //   <div id='foo'>
// //     Hello, World!<div>This is also working</div>
// //   </div>
// // );

// const dom = render(vnode);
// document.body.appendChild(dom);
const ITEMS = "hello there people".split(" ");

// turn an Array into list items:
let list = (items) => items.map((p) => <li> {p} </li>);

// view with a call out ("partial") to generate a list from an Array:
let vdom = (
  <div id='foo'>
    <p>Look, a simple JSX DOM renderer!</p>
    <ul>{list(ITEMS)}</ul>
  </div>
);

// render() converts our "virtual DOM" (see below) to a real DOM tree:
let dom = render(vdom);

// append the new nodes somewhere:
document.body.appendChild(dom);

// Remember that "virtual DOM"? It's just JSON - each "VNode" is an object with 3 properties.
let json = JSON.stringify(vdom, null, "  ");

// The whole process (JSX -> VDOM -> DOM) in one step:
document.body.appendChild(render(<pre id='vdom'>{json}</pre>));

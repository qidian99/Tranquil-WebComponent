import { h, render } from 'preact';
import { useRef, useEffect } from 'preact/hooks';

// based on https://github.com/developit/preact-shadow-dom
// shadowRoot swallowing events
export function ShadowDOM(ComponentClass, CSSString) {
  const ShadowDOMComponent = props => {
    console.log(ComponentClass);
    const shadowRoot = useRef(null);

    useEffect(() => {
      if (shadowRoot) {
        const shadow = shadowRoot.current.attachShadow({ mode: 'open' });
        render(<ComponentClass {...props} />, shadow);
        shadow.innerHTML += `<style>${CSSString}</style>`;
      }
    }, [shadowRoot, props]);

    return <div ref={shadowRoot} />;
  };

  return ShadowDOMComponent;
}

// based on https://github.com/developit/preact-shadow-root
export class Shadow {
  shouldComponentUpdate(nextProps) {
    this.update(nextProps);
    return false;
  }
  componentDidMount() {
    let parent = this.base && this.base.parentNode;
    if (parent) {
      this.shadow = parent.attachShadow({ mode: 'open' });
      this.update(this.props);
    }
  }
  componentWillUnmount() {
    this.update(this.props, true);
  }
  update(props, unrender) {
    let child = props.children;
    let replace;
    if (child && child[0] && 'nodeName' in child[0]) {
      child = child[0];
      replace = this.shadow.firstChild;
    }
    let root = render(unrender ? null : child, this.shadow, replace);
    if (unrender && root) root.remove();
  }
  render() {}
}

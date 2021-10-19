import React, { Component, Suspense } from "react";

const layouts = {
  about: {
    showHeader: false,
    getView: React.lazy(() => import("./About")),
  },
  form: {
    showHeader: true,
    getView: React.lazy(() => import("./Form")),
  },
};

class Page extends Component {
  render() {
    const showHeader = layouts[this.props.viewName].showHeader;
    const View = layouts[this.props.viewName].getView;
    return (
      <div>
        {showHeader && <h1>{this.props.viewName}</h1>}
        <Suspense fallback={<div>Loading...</div>}>
          <View {...this.props} />
        </Suspense>
      </div>
    );
  }
}

export default Page;

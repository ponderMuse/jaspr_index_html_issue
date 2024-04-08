// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 3.3.0 (stable) (Tue Feb 13 10:25:19 2024 +0000) on "linux_x64"
// Module: packages/jaspr_0_11_1_test/pages/about
// Flags: newRuntimeTypes(true), soundNullSafety(true), enableAsserts(true)
define(['dart_sdk', 'packages/jaspr/browser', 'packages/jaspr/src/foundation/annotations'], (function load__packages__jaspr_0_11_1_test__pages__about(dart_sdk, packages__jaspr__browser, packages__jaspr__src__foundation__annotations) {
  'use strict';
  const dart_rti = dart_sdk.dart_rti;
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const html = packages__jaspr__browser.src__components__html__html;
  const style = packages__jaspr__browser.src__components__style;
  const framework = packages__jaspr__browser.src__framework__framework;
  const unit = packages__jaspr__src__foundation__annotations.src__foundation__styles__properties__unit;
  var about = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(true);
  var T = {
    Component: () => (T.Component = dart.constFn(dart_rti.findType("jaspr__src__framework__framework|Component")))(),
    SyncIterableOfComponent: () => (T.SyncIterableOfComponent = dart.constFn(_js_helper.SyncIterable$(T.Component())))(),
    NestedStyleRule: () => (T.NestedStyleRule = dart.constFn(dart_rti.findType("jaspr__src__components__style|NestedStyleRule")))(),
    BuildContextToIterableOfComponent: () => (T.BuildContextToIterableOfComponent = dart.constFn(dart_rti.findType("core|Iterable<jaspr__src__framework__framework|Component>(jaspr__src__framework__framework|BuildContext)")))(),
    dynamic: () => (T.dynamic = dart.constFn(dart_rti.findType("@")))()
  };
  var G = {
    JSArrayOfComponent: () => (G.JSArrayOfComponent = dart.constFn(_interceptors.JSArray$(T.Component())))(),
    JSArrayOfNestedStyleRule: () => (G.JSArrayOfNestedStyleRule = dart.constFn(_interceptors.JSArray$(T.NestedStyleRule())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:jaspr_0_11_1_test/pages/about.dart"];
  about.About = class About extends framework.StatelessComponent {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new about.About.new({key: key});
    }
    build(context) {
      return new (T.SyncIterableOfComponent()).new(function* build() {
        let t$360, t$360$, t$360$0, t$360$1;
        yield html.section(G.JSArrayOfComponent().of([html.ol(G.JSArrayOfComponent().of([html.li(G.JSArrayOfComponent().of([html.h3(G.JSArrayOfComponent().of([html.text("📖 Documentation")])), html.text("Jaspr's "), (t$360 = "https://docs.page/schultek/jaspr", html.a(G.JSArrayOfComponent().of([html.text("official documentation")]), {href: t$360})), html.text(" provides you with all information you need to get started.")])), html.li(G.JSArrayOfComponent().of([html.h3(G.JSArrayOfComponent().of([html.text("💬 Community")])), html.text("Got stuck? Ask your question on the official "), (t$360$ = "https://docs.page/schultek/jaspr", html.a(G.JSArrayOfComponent().of([html.text("Discord server")]), {href: t$360$})), html.text(" for the Jaspr community.")])), html.li(G.JSArrayOfComponent().of([html.h3(G.JSArrayOfComponent().of([html.text("📦 Ecosystem")])), html.text("Get official packages and integrations for your project like jaspr_router, jaspr_tailwind or jaspr_riverpod. Find packages built for Jaspr on pub.dev using the "), (t$360$0 = "https://pub.dev/packages?q=topic%3Ajaspr", html.a(G.JSArrayOfComponent().of([html.text("#jaspr")]), {href: t$360$0})), html.text(" topic, or publish your own.")])), html.li(G.JSArrayOfComponent().of([html.h3(G.JSArrayOfComponent().of([html.text("💙 Support Jaspr")])), html.text("If you like Jaspr, consider starring us on "), (t$360$1 = "https://github.com/schultek/jaspr", html.a(G.JSArrayOfComponent().of([html.text("Github")]), {href: t$360$1})), html.text(" and tell your friends.")]))]))]));
      });
    }
    static get styles() {
      return G.JSArrayOfNestedStyleRule().of([style.css("ol").box({maxWidth: unit['UnitExt|get#px'](500)})]);
    }
  };
  (about.About.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    dart.global.Object.getPrototypeOf(about.About).new.call(this, {key: key});
    ;
  }).prototype = about.About.prototype;
  dart.addTypeTests(about.About);
  dart.addRtiResources(about.About, ["jaspr_0_11_1_test__pages__about|About"]);
  dart.addTypeCaches(about.About);
  dart.setMethodSignature(about.About, () => dart.global.Object.setPrototypeOf({build: T.BuildContextToIterableOfComponent()}, dart.getMethods(dart.global.Object.getPrototypeOf(about.About))));
  dart.setStaticGetterSignature(about.About, () => ['styles']);
  dart.setLibraryUri(about.About, I[0]);
  dart_rti._Universe.addRules(dart.typeUniverse, JSON.parse('{"jaspr__src__components__style|NestedStyleRule":{"jaspr__src__components__style|StyleRule":[],"StylesMixin.T":"jaspr__src__components__style|NestedStyleRule","jaspr__src__foundation__styles__styles|StylesMixin":["jaspr__src__components__style|NestedStyleRule"]},"jaspr__src__foundation__styles__styles|StylesMixin":{"StylesMixin.T":"1"},"core|Iterable":{"Iterable.E":"1"},"jaspr_0_11_1_test__pages__about|About":{"jaspr__src__framework__framework|StatelessComponent":[],"jaspr__src__framework__framework|Component":[]},"jaspr__src__framework__framework|StatelessComponent":{"jaspr__src__framework__framework|Component":[]}}'));
  dart.trackLibraries("packages/jaspr_0_11_1_test/pages/about", {
    "package:jaspr_0_11_1_test/pages/about.dart": about
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["about.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAOyC;AAAd;;AACvB,cAAM,aAAQ,2BACZ,QAAG,2BACD,QAAG,2BACD,QAAG,2BAAC,UAAK,uBACT,UAAK,sBACG,oCAAR,OAA4C,2BAAC,UAAK,8CAClD,UAAK,mEAEP,QAAG,2BACD,QAAG,2BAAC,UAAK,mBACT,UAAK,4DACG,oCAAR,OAA4C,2BAAC,UAAK,uCAClD,UAAK,iCAEP,QAAG,2BACD,QAAG,2BAAC,UAAK,mBACT,UACI,gLACI,4CAAR,OAAoD,2BAAC,UAAK,gCAC1D,UAAK,oCAEP,QAAG,2BACD,QAAG,2BAAC,UAAK,uBACT,UAAK,2DACG,qCAAR,OAA6C,2BAAC,UAAK,gCACnD,UAAK;MAIb;;;AAEqB,8CACf,AAAU,UAAN,qBAAwB,uBAAJ;IACzB;;;QArCc;AAAb,wEAAa,GAAG;;EAAE","file":"about.ddc.js"}');
  // Exports:
  return {
    pages__about: about
  };
}));

//# sourceMappingURL=about.ddc.js.map

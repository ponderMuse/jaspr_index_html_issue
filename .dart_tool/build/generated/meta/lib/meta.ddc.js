// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 3.3.0 (stable) (Tue Feb 13 10:25:19 2024 +0000) on "linux_x64"
// Module: packages/meta/meta
// Flags: newRuntimeTypes(true), soundNullSafety(true), enableAsserts(true)
define(['dart_sdk'], (function load__packages__meta__meta(dart_sdk) {
  'use strict';
  const dart_rti = dart_sdk.dart_rti;
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var meta = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(true);
  var T = {
    String: () => (T.String = dart.constFn(dart_rti.findType("core|String")))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart_rti.findType("core|Object?")))(),
    StringN: () => (T.StringN = dart.constFn(dart_rti.findType("core|String?")))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const(Object.setPrototypeOf({
      }, meta._AlwaysThrows.prototype));
    },
    get C1() {
      return C[1] = dart.const(Object.setPrototypeOf({
      }, meta._Checked.prototype));
    },
    get C2() {
      return C[2] = dart.const(Object.setPrototypeOf({
      }, meta._DoNotStore.prototype));
    },
    get C3() {
      return C[3] = dart.const(Object.setPrototypeOf({
      }, meta._DoNotSubmit.prototype));
    },
    get C4() {
      return C[4] = dart.const(Object.setPrototypeOf({
      }, meta._Experimental.prototype));
    },
    get C5() {
      return C[5] = dart.const(Object.setPrototypeOf({
      }, meta._Factory.prototype));
    },
    get C6() {
      return C[6] = dart.const(Object.setPrototypeOf({
        [reason$]: ""
      }, meta.Immutable.prototype));
    },
    get C7() {
      return C[7] = dart.const(Object.setPrototypeOf({
      }, meta._Internal.prototype));
    },
    get C8() {
      return C[8] = dart.const(Object.setPrototypeOf({
      }, meta._IsTest.prototype));
    },
    get C9() {
      return C[9] = dart.const(Object.setPrototypeOf({
      }, meta._IsTestGroup.prototype));
    },
    get C10() {
      return C[10] = dart.const(Object.setPrototypeOf({
      }, meta._Literal.prototype));
    },
    get C11() {
      return C[11] = dart.const(Object.setPrototypeOf({
      }, meta._MustBeConst.prototype));
    },
    get C12() {
      return C[12] = dart.const(Object.setPrototypeOf({
      }, meta._MustBeOverridden.prototype));
    },
    get C13() {
      return C[13] = dart.const(Object.setPrototypeOf({
      }, meta._MustCallSuper.prototype));
    },
    get C14() {
      return C[14] = dart.const(Object.setPrototypeOf({
      }, meta._NonVirtual.prototype));
    },
    get C15() {
      return C[15] = dart.const(Object.setPrototypeOf({
      }, meta._OptionalTypeArgs.prototype));
    },
    get C16() {
      return C[16] = dart.const(Object.setPrototypeOf({
      }, meta._Protected.prototype));
    },
    get C17() {
      return C[17] = dart.const(Object.setPrototypeOf({
      }, meta._Redeclare.prototype));
    },
    get C18() {
      return C[18] = dart.const(Object.setPrototypeOf({
      }, meta._Reopen.prototype));
    },
    get C19() {
      return C[19] = dart.const(Object.setPrototypeOf({
        [reason$0]: ""
      }, meta.Required.prototype));
    },
    get C20() {
      return C[20] = dart.const(Object.setPrototypeOf({
      }, meta._Sealed.prototype));
    },
    get C21() {
      return C[21] = dart.const(Object.setPrototypeOf({
        [parameterDefined$]: null,
        [reason$1]: ""
      }, meta.UseResult.prototype));
    },
    get C22() {
      return C[22] = dart.const(Object.setPrototypeOf({
      }, meta._Virtual.prototype));
    },
    get C23() {
      return C[23] = dart.const(Object.setPrototypeOf({
      }, meta._VisibleForOverriding.prototype));
    },
    get C24() {
      return C[24] = dart.const(Object.setPrototypeOf({
      }, meta._VisibleForTesting.prototype));
    }
  }, false);
  var C = Array(25).fill(void 0);
  var I = [
    "package:meta/meta.dart",
    "dart:core",
    "org-dartlang-app:///packages/meta/meta.dart"
  ];
  var reason$ = dart.privateName(meta, "Immutable.reason");
  meta.Immutable = class Immutable extends core.Object {
    get reason() {
      return this[reason$];
    }
    set reason(value) {
      super.reason = value;
    }
    static ['_#new#tearOff'](reason = "") {
      return new meta.Immutable.new(reason);
    }
  };
  (meta.Immutable.new = function(reason = "") {
    this[reason$] = reason;
    ;
  }).prototype = meta.Immutable.prototype;
  dart.addTypeTests(meta.Immutable);
  dart.addRtiResources(meta.Immutable, ["meta__meta|Immutable"]);
  dart.addTypeCaches(meta.Immutable);
  dart.setLibraryUri(meta.Immutable, I[0]);
  dart.setFieldSignature(meta.Immutable, () => dart.global.Object.setPrototypeOf({reason: {type: T.String(), isConst: false, isFinal: true, libraryUri: I[1]}}, dart.getFields(dart.global.Object.getPrototypeOf(meta.Immutable))));
  var reason$0 = dart.privateName(meta, "Required.reason");
  meta.Required = class Required extends core.Object {
    get reason() {
      return this[reason$0];
    }
    set reason(value) {
      super.reason = value;
    }
    static ['_#new#tearOff'](reason = "") {
      return new meta.Required.new(reason);
    }
  };
  (meta.Required.new = function(reason = "") {
    this[reason$0] = reason;
    ;
  }).prototype = meta.Required.prototype;
  dart.addTypeTests(meta.Required);
  dart.addRtiResources(meta.Required, ["meta__meta|Required"]);
  dart.addTypeCaches(meta.Required);
  dart.setLibraryUri(meta.Required, I[0]);
  dart.setFieldSignature(meta.Required, () => dart.global.Object.setPrototypeOf({reason: {type: T.String(), isConst: false, isFinal: true, libraryUri: I[1]}}, dart.getFields(dart.global.Object.getPrototypeOf(meta.Required))));
  var metadata$ = dart.privateName(meta, "ResourceIdentifier.metadata");
  meta.ResourceIdentifier = class ResourceIdentifier extends core.Object {
    get metadata() {
      return this[metadata$];
    }
    set metadata(value) {
      super.metadata = value;
    }
    static ['_#new#tearOff'](metadata = null) {
      return new meta.ResourceIdentifier.new(metadata);
    }
  };
  (meta.ResourceIdentifier.new = function(metadata = null) {
    this[metadata$] = metadata;
    if (!(metadata == null || typeof metadata == 'boolean' || typeof metadata == 'number' || typeof metadata == 'string')) dart.assertFailed("Valid metadata types are bool, int, double, and String.", I[2], 557, 11, "metadata == null ||\n              metadata is bool ||\n              metadata is num ||\n              metadata is String");
    ;
  }).prototype = meta.ResourceIdentifier.prototype;
  dart.addTypeTests(meta.ResourceIdentifier);
  dart.addRtiResources(meta.ResourceIdentifier, ["meta__meta|ResourceIdentifier"]);
  dart.addTypeCaches(meta.ResourceIdentifier);
  dart.setLibraryUri(meta.ResourceIdentifier, I[0]);
  dart.setFieldSignature(meta.ResourceIdentifier, () => dart.global.Object.setPrototypeOf({metadata: {type: T.ObjectN(), isConst: false, isFinal: true, libraryUri: I[1]}}, dart.getFields(dart.global.Object.getPrototypeOf(meta.ResourceIdentifier))));
  var reason$1 = dart.privateName(meta, "UseResult.reason");
  var parameterDefined$ = dart.privateName(meta, "UseResult.parameterDefined");
  meta.UseResult = class UseResult extends core.Object {
    get reason() {
      return this[reason$1];
    }
    set reason(value) {
      super.reason = value;
    }
    get parameterDefined() {
      return this[parameterDefined$];
    }
    set parameterDefined(value) {
      super.parameterDefined = value;
    }
    static ['_#new#tearOff'](reason = "") {
      return new meta.UseResult.new(reason);
    }
    static ['_#unless#tearOff'](opts) {
      let parameterDefined = opts && 'parameterDefined' in opts ? opts.parameterDefined : null;
      let reason = opts && 'reason' in opts ? opts.reason : "";
      return new meta.UseResult.unless({parameterDefined: parameterDefined, reason: reason});
    }
  };
  (meta.UseResult.new = function(reason = "") {
    this[reason$1] = reason;
    this[parameterDefined$] = null;
    ;
  }).prototype = meta.UseResult.prototype;
  (meta.UseResult.unless = function(opts) {
    let parameterDefined = opts && 'parameterDefined' in opts ? opts.parameterDefined : null;
    let reason = opts && 'reason' in opts ? opts.reason : "";
    this[parameterDefined$] = parameterDefined;
    this[reason$1] = reason;
    ;
  }).prototype = meta.UseResult.prototype;
  dart.addTypeTests(meta.UseResult);
  dart.addRtiResources(meta.UseResult, ["meta__meta|UseResult"]);
  dart.addTypeCaches(meta.UseResult);
  dart.setLibraryUri(meta.UseResult, I[0]);
  dart.setFieldSignature(meta.UseResult, () => dart.global.Object.setPrototypeOf({
    reason: {type: T.String(), isConst: false, isFinal: true, libraryUri: I[1]},
    parameterDefined: {type: T.StringN(), isConst: false, isFinal: true, libraryUri: I[1]}
  }, dart.getFields(dart.global.Object.getPrototypeOf(meta.UseResult))));
  meta._AlwaysThrows = class _AlwaysThrows extends core.Object {
    static ['_#new#tearOff']() {
      return new meta._AlwaysThrows.new();
    }
  };
  (meta._AlwaysThrows.new = function() {
    ;
  }).prototype = meta._AlwaysThrows.prototype;
  dart.addTypeTests(meta._AlwaysThrows);
  dart.addRtiResources(meta._AlwaysThrows, ["meta__meta|_AlwaysThrows"]);
  dart.addTypeCaches(meta._AlwaysThrows);
  dart.setLibraryUri(meta._AlwaysThrows, I[0]);
  meta._Checked = class _Checked extends core.Object {
    static ['_#new#tearOff']() {
      return new meta._Checked.new();
    }
  };
  (meta._Checked.new = function() {
    ;
  }).prototype = meta._Checked.prototype;
  dart.addTypeTests(meta._Checked);
  dart.addRtiResources(meta._Checked, ["meta__meta|_Checked"]);
  dart.addTypeCaches(meta._Checked);
  dart.setLibraryUri(meta._Checked, I[0]);
  meta._DoNotStore = class _DoNotStore extends core.Object {
    static ['_#new#tearOff']() {
      return new meta._DoNotStore.new();
    }
  };
  (meta._DoNotStore.new = function() {
    ;
  }).prototype = meta._DoNotStore.prototype;
  dart.addTypeTests(meta._DoNotStore);
  dart.addRtiResources(meta._DoNotStore, ["meta__meta|_DoNotStore"]);
  dart.addTypeCaches(meta._DoNotStore);
  dart.setLibraryUri(meta._DoNotStore, I[0]);
  meta._DoNotSubmit = class _DoNotSubmit extends core.Object {
    static ['_#new#tearOff']() {
      return new meta._DoNotSubmit.new();
    }
  };
  (meta._DoNotSubmit.new = function() {
    ;
  }).prototype = meta._DoNotSubmit.prototype;
  dart.addTypeTests(meta._DoNotSubmit);
  dart.addRtiResources(meta._DoNotSubmit, ["meta__meta|_DoNotSubmit"]);
  dart.addTypeCaches(meta._DoNotSubmit);
  dart.setLibraryUri(meta._DoNotSubmit, I[0]);
  meta._Experimental = class _Experimental extends core.Object {
    static ['_#new#tearOff']() {
      return new meta._Experimental.new();
    }
  };
  (meta._Experimental.new = function() {
    ;
  }).prototype = meta._Experimental.prototype;
  dart.addTypeTests(meta._Experimental);
  dart.addRtiResources(meta._Experimental, ["meta__meta|_Experimental"]);
  dart.addTypeCaches(meta._Experimental);
  dart.setLibraryUri(meta._Experimental, I[0]);
  meta._Factory = class _Factory extends core.Object {
    static ['_#new#tearOff']() {
      return new meta._Factory.new();
    }
  };
  (meta._Factory.new = function() {
    ;
  }).prototype = meta._Factory.prototype;
  dart.addTypeTests(meta._Factory);
  dart.addRtiResources(meta._Factory, ["meta__meta|_Factory"]);
  dart.addTypeCaches(meta._Factory);
  dart.setLibraryUri(meta._Factory, I[0]);
  meta._Internal = class _Internal extends core.Object {
    static ['_#new#tearOff']() {
      return new meta._Internal.new();
    }
  };
  (meta._Internal.new = function() {
    ;
  }).prototype = meta._Internal.prototype;
  dart.addTypeTests(meta._Internal);
  dart.addRtiResources(meta._Internal, ["meta__meta|_Internal"]);
  dart.addTypeCaches(meta._Internal);
  dart.setLibraryUri(meta._Internal, I[0]);
  meta._IsTest = class _IsTest extends core.Object {
    static ['_#new#tearOff']() {
      return new meta._IsTest.new();
    }
  };
  (meta._IsTest.new = function() {
    ;
  }).prototype = meta._IsTest.prototype;
  dart.addTypeTests(meta._IsTest);
  dart.addRtiResources(meta._IsTest, ["meta__meta|_IsTest"]);
  dart.addTypeCaches(meta._IsTest);
  dart.setLibraryUri(meta._IsTest, I[0]);
  meta._IsTestGroup = class _IsTestGroup extends core.Object {
    static ['_#new#tearOff']() {
      return new meta._IsTestGroup.new();
    }
  };
  (meta._IsTestGroup.new = function() {
    ;
  }).prototype = meta._IsTestGroup.prototype;
  dart.addTypeTests(meta._IsTestGroup);
  dart.addRtiResources(meta._IsTestGroup, ["meta__meta|_IsTestGroup"]);
  dart.addTypeCaches(meta._IsTestGroup);
  dart.setLibraryUri(meta._IsTestGroup, I[0]);
  meta._Literal = class _Literal extends core.Object {
    static ['_#new#tearOff']() {
      return new meta._Literal.new();
    }
  };
  (meta._Literal.new = function() {
    ;
  }).prototype = meta._Literal.prototype;
  dart.addTypeTests(meta._Literal);
  dart.addRtiResources(meta._Literal, ["meta__meta|_Literal"]);
  dart.addTypeCaches(meta._Literal);
  dart.setLibraryUri(meta._Literal, I[0]);
  meta._MustBeConst = class _MustBeConst extends core.Object {
    static ['_#new#tearOff']() {
      return new meta._MustBeConst.new();
    }
  };
  (meta._MustBeConst.new = function() {
    ;
  }).prototype = meta._MustBeConst.prototype;
  dart.addTypeTests(meta._MustBeConst);
  dart.addRtiResources(meta._MustBeConst, ["meta__meta|_MustBeConst"]);
  dart.addTypeCaches(meta._MustBeConst);
  dart.setLibraryUri(meta._MustBeConst, I[0]);
  meta._MustBeOverridden = class _MustBeOverridden extends core.Object {
    static ['_#new#tearOff']() {
      return new meta._MustBeOverridden.new();
    }
  };
  (meta._MustBeOverridden.new = function() {
    ;
  }).prototype = meta._MustBeOverridden.prototype;
  dart.addTypeTests(meta._MustBeOverridden);
  dart.addRtiResources(meta._MustBeOverridden, ["meta__meta|_MustBeOverridden"]);
  dart.addTypeCaches(meta._MustBeOverridden);
  dart.setLibraryUri(meta._MustBeOverridden, I[0]);
  meta._MustCallSuper = class _MustCallSuper extends core.Object {
    static ['_#new#tearOff']() {
      return new meta._MustCallSuper.new();
    }
  };
  (meta._MustCallSuper.new = function() {
    ;
  }).prototype = meta._MustCallSuper.prototype;
  dart.addTypeTests(meta._MustCallSuper);
  dart.addRtiResources(meta._MustCallSuper, ["meta__meta|_MustCallSuper"]);
  dart.addTypeCaches(meta._MustCallSuper);
  dart.setLibraryUri(meta._MustCallSuper, I[0]);
  meta._NonVirtual = class _NonVirtual extends core.Object {
    static ['_#new#tearOff']() {
      return new meta._NonVirtual.new();
    }
  };
  (meta._NonVirtual.new = function() {
    ;
  }).prototype = meta._NonVirtual.prototype;
  dart.addTypeTests(meta._NonVirtual);
  dart.addRtiResources(meta._NonVirtual, ["meta__meta|_NonVirtual"]);
  dart.addTypeCaches(meta._NonVirtual);
  dart.setLibraryUri(meta._NonVirtual, I[0]);
  meta._OptionalTypeArgs = class _OptionalTypeArgs extends core.Object {
    static ['_#new#tearOff']() {
      return new meta._OptionalTypeArgs.new();
    }
  };
  (meta._OptionalTypeArgs.new = function() {
    ;
  }).prototype = meta._OptionalTypeArgs.prototype;
  dart.addTypeTests(meta._OptionalTypeArgs);
  dart.addRtiResources(meta._OptionalTypeArgs, ["meta__meta|_OptionalTypeArgs"]);
  dart.addTypeCaches(meta._OptionalTypeArgs);
  dart.setLibraryUri(meta._OptionalTypeArgs, I[0]);
  meta._Protected = class _Protected extends core.Object {
    static ['_#new#tearOff']() {
      return new meta._Protected.new();
    }
  };
  (meta._Protected.new = function() {
    ;
  }).prototype = meta._Protected.prototype;
  dart.addTypeTests(meta._Protected);
  dart.addRtiResources(meta._Protected, ["meta__meta|_Protected"]);
  dart.addTypeCaches(meta._Protected);
  dart.setLibraryUri(meta._Protected, I[0]);
  meta._Redeclare = class _Redeclare extends core.Object {
    static ['_#new#tearOff']() {
      return new meta._Redeclare.new();
    }
  };
  (meta._Redeclare.new = function() {
    ;
  }).prototype = meta._Redeclare.prototype;
  dart.addTypeTests(meta._Redeclare);
  dart.addRtiResources(meta._Redeclare, ["meta__meta|_Redeclare"]);
  dart.addTypeCaches(meta._Redeclare);
  dart.setLibraryUri(meta._Redeclare, I[0]);
  meta._Reopen = class _Reopen extends core.Object {
    static ['_#new#tearOff']() {
      return new meta._Reopen.new();
    }
  };
  (meta._Reopen.new = function() {
    ;
  }).prototype = meta._Reopen.prototype;
  dart.addTypeTests(meta._Reopen);
  dart.addRtiResources(meta._Reopen, ["meta__meta|_Reopen"]);
  dart.addTypeCaches(meta._Reopen);
  dart.setLibraryUri(meta._Reopen, I[0]);
  meta._Sealed = class _Sealed extends core.Object {
    static ['_#new#tearOff']() {
      return new meta._Sealed.new();
    }
  };
  (meta._Sealed.new = function() {
    ;
  }).prototype = meta._Sealed.prototype;
  dart.addTypeTests(meta._Sealed);
  dart.addRtiResources(meta._Sealed, ["meta__meta|_Sealed"]);
  dart.addTypeCaches(meta._Sealed);
  dart.setLibraryUri(meta._Sealed, I[0]);
  meta._Virtual = class _Virtual extends core.Object {
    static ['_#new#tearOff']() {
      return new meta._Virtual.new();
    }
  };
  (meta._Virtual.new = function() {
    ;
  }).prototype = meta._Virtual.prototype;
  dart.addTypeTests(meta._Virtual);
  dart.addRtiResources(meta._Virtual, ["meta__meta|_Virtual"]);
  dart.addTypeCaches(meta._Virtual);
  dart.setLibraryUri(meta._Virtual, I[0]);
  meta._VisibleForOverriding = class _VisibleForOverriding extends core.Object {
    static ['_#new#tearOff']() {
      return new meta._VisibleForOverriding.new();
    }
  };
  (meta._VisibleForOverriding.new = function() {
    ;
  }).prototype = meta._VisibleForOverriding.prototype;
  dart.addTypeTests(meta._VisibleForOverriding);
  dart.addRtiResources(meta._VisibleForOverriding, ["meta__meta|_VisibleForOverriding"]);
  dart.addTypeCaches(meta._VisibleForOverriding);
  dart.setLibraryUri(meta._VisibleForOverriding, I[0]);
  meta._VisibleForTesting = class _VisibleForTesting extends core.Object {
    static ['_#new#tearOff']() {
      return new meta._VisibleForTesting.new();
    }
  };
  (meta._VisibleForTesting.new = function() {
    ;
  }).prototype = meta._VisibleForTesting.prototype;
  dart.addTypeTests(meta._VisibleForTesting);
  dart.addRtiResources(meta._VisibleForTesting, ["meta__meta|_VisibleForTesting"]);
  dart.addTypeCaches(meta._VisibleForTesting);
  dart.setLibraryUri(meta._VisibleForTesting, I[0]);
  dart.defineLazy(meta, {
    /*meta.alwaysThrows*/get alwaysThrows() {
      return C[0] || CT.C0;
    },
    /*meta.checked*/get checked() {
      return C[1] || CT.C1;
    },
    /*meta.doNotStore*/get doNotStore() {
      return C[2] || CT.C2;
    },
    /*meta.doNotSubmit*/get doNotSubmit() {
      return C[3] || CT.C3;
    },
    /*meta.experimental*/get experimental() {
      return C[4] || CT.C4;
    },
    /*meta.factory*/get factory() {
      return C[5] || CT.C5;
    },
    /*meta.immutable*/get immutable() {
      return C[6] || CT.C6;
    },
    /*meta.internal*/get internal() {
      return C[7] || CT.C7;
    },
    /*meta.isTest*/get isTest() {
      return C[8] || CT.C8;
    },
    /*meta.isTestGroup*/get isTestGroup() {
      return C[9] || CT.C9;
    },
    /*meta.literal*/get literal() {
      return C[10] || CT.C10;
    },
    /*meta.mustBeConst*/get mustBeConst() {
      return C[11] || CT.C11;
    },
    /*meta.mustBeOverridden*/get mustBeOverridden() {
      return C[12] || CT.C12;
    },
    /*meta.mustCallSuper*/get mustCallSuper() {
      return C[13] || CT.C13;
    },
    /*meta.nonVirtual*/get nonVirtual() {
      return C[14] || CT.C14;
    },
    /*meta.optionalTypeArgs*/get optionalTypeArgs() {
      return C[15] || CT.C15;
    },
    /*meta.protected*/get protected() {
      return C[16] || CT.C16;
    },
    /*meta.redeclare*/get redeclare() {
      return C[17] || CT.C17;
    },
    /*meta.reopen*/get reopen() {
      return C[18] || CT.C18;
    },
    /*meta.required*/get required() {
      return C[19] || CT.C19;
    },
    /*meta.sealed*/get sealed() {
      return C[20] || CT.C20;
    },
    /*meta.useResult*/get useResult() {
      return C[21] || CT.C21;
    },
    /*meta.virtual*/get virtual() {
      return C[22] || CT.C22;
    },
    /*meta.visibleForOverriding*/get visibleForOverriding() {
      return C[23] || CT.C23;
    },
    /*meta.visibleForTesting*/get visibleForTesting() {
      return C[24] || CT.C24;
    }
  }, false);
  dart.moduleConstCaches.set("packages/meta/meta", C);
  dart_rti._Universe.addRules(dart.typeUniverse, JSON.parse('{"core|String":{"Comparable.T":"core|String","core|Comparable":["core|String"],"core|Pattern":[]},"core|Comparable":{"Comparable.T":"1"}}'));
  dart.trackLibraries("packages/meta/meta", {
    "package:meta/meta.dart": meta
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["meta.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAmfe;;;;;;;;;;;IAGS;;EAAa;;;;;;;;IAyBtB;;;;;;;;;;;IAGQ;;EAAa;;;;;;;;IAiBpB;;;;;;;;;;;IAOiB;UAEvB,AAAS,AAEW,QAFZ,YACK,OAAT,QAAQ,iBACC,OAAT,QAAQ,gBACC,OAAT,QAAQ,iCACZ;;EACD;;;;;;;;;IAcM;;;;;;IAKC;;;;;;;;;;;;;;;;IAGQ;IAAiC,0BAAE;;EAAI;;QAavB;QAAuB;IAAvB;IAAuB;;EAAa;;;;;;;;;;;;;;;;EAIrD;;;;;;;;;;;;EAIL;;;;;;;;;;;;EAWG;;;;;;;;;;;;EAYC;;;;;;;;;;;;EAIC;;;;;;;;;;;;EAIL;;;;;;;;;;;;EAIC;;;;;;;;;;;;EAIF;;;;;;;;;;;;EAIK;;;;;;;;;;;;EAIJ;;;;;;;;;;;;EAQI;;;;;;;;;;;;EAUK;;;;;;;;;;;;EAUH;;;;;;;;;;;;EAIH;;;;;;;;;;;;EAaM;;;;;;;;;;;;EAIP;;;;;;;;;;;;EAUA;;;;;;;;;;;;EAQH;;;;;;;;;;;;EAIA;;;;;;;;;;;;EAKC;;;;;;;;;;;;EAIa;;;;;;;;;;;;EAIH;;;;;;MArqBR,iBAAY;;;MAajB,YAAO;;;MAmBJ,eAAU;;;MAoCT,gBAAW;;;MAsBV,iBAAY;;;MAYjB,YAAO;;;MAaN,cAAS;;;MAcT,aAAQ;;;MAQV,WAAM;;;MAQD,gBAAW;;;MAaf,YAAO;;;MAkDH,gBAAW;;;MAoBN,qBAAgB;;;MAgBnB,kBAAa;;;MAehB,eAAU;;;MAQJ,qBAAgB;;;MAqCvB,cAAS;;;MAYT,cAAS;;;MA8BZ,WAAM;;;MAsBL,aAAQ;;;MAmBT,WAAM;;;MAcJ,cAAS;;;MAUV,YAAO;;;MAWM,yBAAoB;;;MAYvB,sBAAiB","file":"meta.ddc.js"}');
  // Exports:
  return {
    meta: meta
  };
}));

//# sourceMappingURL=meta.ddc.js.map

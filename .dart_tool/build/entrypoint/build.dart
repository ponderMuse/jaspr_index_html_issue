// ignore_for_file: directives_ordering
// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'package:build_runner_core/build_runner_core.dart' as _i1;
import 'package:source_gen/builder.dart' as _i2;
import 'package:jaspr_builder/builder.dart' as _i3;
import 'package:build_web_compilers/builders.dart' as _i4;
import 'package:build_modules/builders.dart' as _i5;
import 'package:build_config/build_config.dart' as _i6;
import 'package:build/build.dart' as _i7;
import 'package:build_resolvers/builder.dart' as _i8;
import 'dart:isolate' as _i9;
import 'package:build_runner/build_runner.dart' as _i10;
import 'dart:io' as _i11;

final _builders = <_i1.BuilderApplication>[
  _i1.apply(
    r'source_gen:combining_builder',
    [_i2.combiningBuilder],
    _i1.toNoneByDefault(),
    hideOutput: false,
    appliesBuilders: const [r'source_gen:part_cleanup'],
  ),
  _i1.apply(
    r'jaspr_builder:imports',
    [_i3.findPlatformImports],
    _i1.toDependentsOf(r'jaspr_builder'),
    hideOutput: true,
  ),
  _i1.apply(
    r'jaspr_builder:stub',
    [_i3.buildPlatformStubs],
    _i1.toDependentsOf(r'jaspr_builder'),
    hideOutput: false,
  ),
  _i1.apply(
    r'jaspr_builder:client_module',
    [_i3.buildClientModule],
    _i1.toDependentsOf(r'jaspr_builder'),
    hideOutput: true,
  ),
  _i1.apply(
    r'jaspr_builder:jaspr_options',
    [_i3.buildJasprOptions],
    _i1.toDependentsOf(r'jaspr_builder'),
    hideOutput: false,
  ),
  _i1.apply(
    r'jaspr_builder:import_parts',
    [_i3.writePlatformImports],
    _i1.toDependentsOf(r'jaspr_builder'),
    hideOutput: false,
  ),
  _i1.apply(
    r'jaspr_builder:client_registry',
    [_i3.buildClientRegistry],
    _i1.toDependentsOf(r'jaspr_builder'),
    hideOutput: true,
  ),
  _i1.apply(
    r'build_web_compilers:sdk_js',
    [
      _i4.sdkJsCompile,
      _i4.sdkJsCopyRequirejs,
    ],
    _i1.toNoneByDefault(),
    isOptional: true,
    hideOutput: true,
  ),
  _i1.apply(
    r'build_modules:module_library',
    [_i5.moduleLibraryBuilder],
    _i1.toAllPackages(),
    isOptional: true,
    hideOutput: true,
    appliesBuilders: const [r'build_modules:module_cleanup'],
  ),
  _i1.apply(
    r'build_web_compilers:ddc_modules',
    [
      _i4.ddcMetaModuleBuilder,
      _i4.ddcMetaModuleCleanBuilder,
      _i4.ddcModuleBuilder,
    ],
    _i1.toNoneByDefault(),
    isOptional: true,
    hideOutput: true,
    appliesBuilders: const [r'build_modules:module_cleanup'],
  ),
  _i1.apply(
    r'build_web_compilers:ddc',
    [
      _i4.ddcKernelBuilder,
      _i4.ddcBuilder,
    ],
    _i1.toAllPackages(),
    isOptional: true,
    hideOutput: true,
    appliesBuilders: const [
      r'build_web_compilers:ddc_modules',
      r'build_web_compilers:dart2js_modules',
      r'build_web_compilers:dart_source_cleanup',
    ],
  ),
  _i1.apply(
    r'build_web_compilers:dart2js_modules',
    [
      _i4.dart2jsMetaModuleBuilder,
      _i4.dart2jsMetaModuleCleanBuilder,
      _i4.dart2jsModuleBuilder,
    ],
    _i1.toNoneByDefault(),
    isOptional: true,
    hideOutput: true,
    appliesBuilders: const [r'build_modules:module_cleanup'],
  ),
  _i1.apply(
    r'build_web_compilers:entrypoint',
    [_i4.webEntrypointBuilder],
    _i1.toRoot(),
    hideOutput: true,
    defaultGenerateFor: const _i6.InputSet(
      include: [
        r'web/**',
        r'test/**.dart.browser_test.dart',
        r'example/**',
        r'benchmark/**',
      ],
      exclude: [
        r'test/**.node_test.dart',
        r'test/**.vm_test.dart',
      ],
    ),
    defaultOptions: const _i7.BuilderOptions(<String, dynamic>{
      r'dart2js_args': <dynamic>[r'--minify']
    }),
    defaultDevOptions: const _i7.BuilderOptions(<String, dynamic>{
      r'dart2js_args': <dynamic>[r'--enable-asserts']
    }),
    defaultReleaseOptions:
        const _i7.BuilderOptions(<String, dynamic>{r'compiler': r'dart2js'}),
    appliesBuilders: const [r'build_web_compilers:dart2js_archive_extractor'],
  ),
  _i1.apply(
    r'build_resolvers:transitive_digests',
    [_i8.transitiveDigestsBuilder],
    _i1.toAllPackages(),
    isOptional: true,
    hideOutput: true,
    appliesBuilders: const [r'build_resolvers:transitive_digest_cleanup'],
  ),
  _i1.applyPostProcess(
    r'build_resolvers:transitive_digest_cleanup',
    _i8.transitiveDigestCleanup,
  ),
  _i1.applyPostProcess(
    r'build_modules:module_cleanup',
    _i5.moduleCleanup,
  ),
  _i1.applyPostProcess(
    r'build_web_compilers:dart2js_archive_extractor',
    _i4.dart2jsArchiveExtractor,
    defaultReleaseOptions:
        const _i7.BuilderOptions(<String, dynamic>{r'filter_outputs': true}),
  ),
  _i1.applyPostProcess(
    r'build_web_compilers:dart_source_cleanup',
    _i4.dartSourceCleanup,
    defaultReleaseOptions:
        const _i7.BuilderOptions(<String, dynamic>{r'enabled': true}),
  ),
  _i1.applyPostProcess(
    r'source_gen:part_cleanup',
    _i2.partCleanup,
  ),
];
void main(
  List<String> args, [
  _i9.SendPort? sendPort,
]) async {
  var result = await _i10.run(
    args,
    _builders,
  );
  sendPort?.send(result);
  _i11.exitCode = result;
}

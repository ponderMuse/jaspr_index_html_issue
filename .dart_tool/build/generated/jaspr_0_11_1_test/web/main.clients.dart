// GENERATED FILE, DO NOT MODIFY
// Generated with jaspr_builder

import 'package:jaspr/browser.dart';
import 'pages/about.client.dart' deferred as i0;
import 'pages/home.client.dart' deferred as i1;

void main() {
  registerClients({
    'pages/about': loadClient(
      i0.loadLibrary,
      (p) => i0.getComponentForParams(p),
    ),
    'pages/home': loadClient(
      i1.loadLibrary,
      (p) => i1.getComponentForParams(p),
    ),
  });
}

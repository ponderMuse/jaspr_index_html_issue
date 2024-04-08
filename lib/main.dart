import 'package:jaspr/server.dart';

import 'app.dart';
import 'jaspr_options.dart';
import 'styles.dart';

void main() {
  Jaspr.initializeApp(
    options: defaultJasprOptions,
  );

  runApp(Document.file(name: 'index.html',child: App()));

  // runApp(Document(
  //   title: 'jaspr_index_html_issue',
  //   styles: styles,
  //   body: App(),
  // ));
}

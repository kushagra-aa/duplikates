import 'package:duplikates/constants/routes.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.pink),
        useMaterial3: true,
      ),
      routes: {
        bookmyshowRoute: (context) => const Placeholder(),
        facebookRoute: (context) => const Placeholder(),
        instagramRoute: (context) => const Placeholder(),
        linkedinRoute: (context) => const Placeholder(),
        messengerRoute: (context) => const Placeholder(),
        snapchatRoute: (context) => const Placeholder(),
        telegramRoute: (context) => const Placeholder(),
        xRoute: (context) => const Placeholder(),
        whatsappRoute: (context) => const Placeholder(),
      },
      home: const MyHomePage(title: 'DupliKates'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: const Center(
        child: Text(
          'Welcome',
        ),
      ),
    );
  }
}

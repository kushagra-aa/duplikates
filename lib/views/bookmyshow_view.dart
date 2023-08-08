import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key, required this.title});
  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromARGB(255, 189, 236, 255),
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: const Text('Book My Show'),
      ),
      body: const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Book My Show'),
          ],
        ),
      ),
    );
  }
}

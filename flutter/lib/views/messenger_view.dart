import 'package:duplikates/constants/colors.dart';
import 'package:flutter/material.dart';

class MessengerPage extends StatelessWidget {
  const MessengerPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: messengerLogoColor,
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: const Text('Messenger'),
        leading: BackButton(onPressed: () {
          Navigator.pop(context);
        }),
      ),
      body: const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Messenger'),
          ],
        ),
      ),
    );
  }
}

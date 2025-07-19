import 'package:duplikates/constants/colors.dart';
import 'package:flutter/material.dart';

class SnapchatPage extends StatelessWidget {
  const SnapchatPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: snapchatLogoColor,
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: const Text('Snapchat'),
        leading: BackButton(onPressed: () {
          Navigator.pop(context);
        }),
      ),
      body: const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Snapchat'),
          ],
        ),
      ),
    );
  }
}

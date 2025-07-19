import 'package:duplikates/constants/colors.dart';
import 'package:flutter/material.dart';

class LinkedinPage extends StatelessWidget {
  const LinkedinPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: linkedinLogoColor,
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: const Text('linkedin'),
        leading: BackButton(onPressed: () {
          Navigator.pop(context);
        }),
      ),
      body: const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('linkedin'),
          ],
        ),
      ),
    );
  }
}

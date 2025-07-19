import 'package:duplikates/constants/colors.dart';
import 'package:flutter/material.dart';

class InstagramPage extends StatelessWidget {
  const InstagramPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: instagramLogoColor,
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: const Text('instagram'),
        leading: BackButton(onPressed: () {
          Navigator.pop(context);
        }),
      ),
      body: const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('instagram'),
          ],
        ),
      ),
    );
  }
}

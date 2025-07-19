import 'package:duplikates/constants/colors.dart';
import 'package:flutter/material.dart';

class FacebookPage extends StatelessWidget {
  const FacebookPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: facebookLogoColor,
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: const Text('facebook'),
        leading: BackButton(onPressed: () {
          Navigator.pop(context);
        }),
      ),
      body: const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('facebook'),
          ],
        ),
      ),
    );
  }
}

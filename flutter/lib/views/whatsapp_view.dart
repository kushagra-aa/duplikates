import 'package:duplikates/constants/colors.dart';
import 'package:flutter/material.dart';

class WhatsappPage extends StatelessWidget {
  const WhatsappPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: whatsappLogoColor,
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: const Text('WhatsApp'),
        leading: BackButton(onPressed: () {
          Navigator.pop(context);
        }),
      ),
      body: const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('WhatsApp'),
          ],
        ),
      ),
    );
  }
}

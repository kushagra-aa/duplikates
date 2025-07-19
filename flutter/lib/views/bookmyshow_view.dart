import 'package:duplikates/constants/colors.dart';
import 'package:flutter/material.dart';

class BookmyshowPage extends StatelessWidget {
  const BookmyshowPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: bookmyshowLogoColor,
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: const Text('Book My Show'),
        leading: BackButton(onPressed: () {
          Navigator.pop(context);
        }),
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

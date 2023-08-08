import 'package:flutter/material.dart';
import 'package:duplikates/constants/routes.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: const Text('DupliKates'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pushNamed(bookmyshowRoute);
              },
              child: const Text('Bookmyshow'),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pushNamed(facebookRoute);
              },
              child: const Text('Facebook'),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pushNamed(instagramRoute);
              },
              child: const Text('Instagram'),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pushNamed(linkedinRoute);
              },
              child: const Text('Linkedin'),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pushNamed(messengerRoute);
              },
              child: const Text('Messenger'),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pushNamed(snapchatRoute);
              },
              child: const Text('Snapchat'),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pushNamed(telegramRoute);
              },
              child: const Text('Telegram'),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pushNamed(whatsappRoute);
              },
              child: const Text('Whatsapp'),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pushNamed(xRoute);
              },
              child: const Text('X'),
            ),
          ],
        ),
      ),
    );
  }
}

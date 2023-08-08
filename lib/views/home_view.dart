import 'package:duplikates/components/nav_button_widget.dart';
import 'package:duplikates/constants/colors.dart';
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
      body: const Center(
        child: Padding(
          padding: EdgeInsets.all(8.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              NavButton(
                backgroundColor: bookmyshowLogoColor,
                foregroundColor: Colors.white,
                route: bookmyshowRoute,
                text: 'Bookmyshow',
              ),
              Spacer(),
              NavButton(
                backgroundColor: facebookLogoColor,
                foregroundColor: Colors.white,
                route: facebookRoute,
                text: 'Facebook',
              ),
              Spacer(),
              NavButton(
                backgroundColor: instagramLogoColor,
                foregroundColor: Colors.white,
                route: instagramRoute,
                text: 'Instagram',
              ),
              Spacer(),
              NavButton(
                backgroundColor: linkedinLogoColor,
                foregroundColor: Colors.white,
                route: linkedinRoute,
                text: 'Linkedin',
              ),
              Spacer(),
              NavButton(
                backgroundColor: messengerLogoColor,
                foregroundColor: Colors.white,
                route: messengerRoute,
                text: 'Messenger',
              ),
              Spacer(),
              NavButton(
                backgroundColor: snapchatLogoColor,
                foregroundColor: Colors.white,
                route: snapchatRoute,
                text: 'Snapchat',
              ),
              Spacer(),
              NavButton(
                backgroundColor: telegramLogoColor,
                foregroundColor: Colors.white,
                route: telegramRoute,
                text: 'Telegram',
              ),
              Spacer(),
              NavButton(
                backgroundColor: whatsappLogoColor,
                foregroundColor: Colors.white,
                route: whatsappRoute,
                text: 'Whatsapp',
              ),
              Spacer(),
              NavButton(
                backgroundColor: xLogoColor,
                foregroundColor: Colors.white,
                route: xRoute,
                text: 'X',
              ),
            ],
          ),
        ),
      ),
    );
  }
}

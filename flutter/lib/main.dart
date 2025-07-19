import 'package:duplikates/constants/routes.dart';
import 'package:duplikates/views/bookmyshow_view.dart';
import 'package:duplikates/views/facebook_view.dart';
import 'package:duplikates/views/home_view.dart';
import 'package:duplikates/views/instagram_view.dart';
import 'package:duplikates/views/linkedin_view.dart';
import 'package:duplikates/views/messenger_view.dart';
import 'package:duplikates/views/snapchat_view.dart';
import 'package:duplikates/views/telegram_view.dart';
import 'package:duplikates/views/whatsapp_view.dart';
import 'package:duplikates/views/x_view.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.pink),
        useMaterial3: true,
      ),
      routes: {
        bookmyshowRoute: (context) => const BookmyshowPage(),
        facebookRoute: (context) => const FacebookPage(),
        instagramRoute: (context) => const InstagramPage(),
        linkedinRoute: (context) => const LinkedinPage(),
        messengerRoute: (context) => const MessengerPage(),
        snapchatRoute: (context) => const SnapchatPage(),
        telegramRoute: (context) => const TelegramPage(),
        whatsappRoute: (context) => const WhatsappPage(),
        xRoute: (context) => const XPage(),
      },
      home: const HomePage(),
    );
  }
}

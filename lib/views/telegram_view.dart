import 'package:duplikates/components/telegram/card.dart';
import 'package:duplikates/helpers/genrate_random_image.dart';
import 'package:flutter/material.dart';

class TelegramPage extends StatelessWidget {
  const TelegramPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromRGBO(24, 24, 25, 1),
      appBar: AppBar(
        backgroundColor: const Color.fromRGBO(38, 38, 40, 1),
        title: const Text(
          'Telegram',
          style: TextStyle(
            color: Colors.white,
            fontSize: 20,
          ),
        ),
        // leading: BackButton(onPressed: () {
        //   Navigator.pop(context);
        // }),
        iconTheme: const IconThemeData(color: Colors.white),
        actions: [
          IconButton(
              onPressed: () {},
              icon: const Icon(
                Icons.search,
              ))
        ],
      ),
      body: Column(
        children: [
          ChatCard(imageURL: genrateRandomImage()),
          ChatCard(imageURL: genrateRandomImage()),
          ChatCard(imageURL: genrateRandomImage()),
          ChatCard(imageURL: genrateRandomImage()),
          ChatCard(imageURL: genrateRandomImage()),
          ChatCard(imageURL: genrateRandomImage()),
          ChatCard(imageURL: genrateRandomImage()),
          ChatCard(imageURL: genrateRandomImage()),
          ChatCard(imageURL: genrateRandomImage()),
        ],
      ),
      drawer: const Placeholder(),
    );
  }
}

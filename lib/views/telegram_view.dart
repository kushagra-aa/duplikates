import 'package:duplikates/components/telegram/card.dart';
import 'package:duplikates/helpers/genrate_random_image.dart';
import 'package:flutter/material.dart';

class TelegramPage extends StatelessWidget {
  const TelegramPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromARGB(255, 29, 29, 31),
      appBar: AppBar(
        backgroundColor: const Color.fromRGBO(38, 38, 40, 1),
        title: const Text(
          'Telegram',
          style: TextStyle(
            color: Colors.white,
            fontSize: 20,
          ),
        ),
        iconTheme: const IconThemeData(color: Colors.white),
        actions: [
          IconButton(
              onPressed: () {},
              icon: const Icon(
                Icons.search,
              ))
        ],
      ),
      drawer: Container(),
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
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        backgroundColor: const Color.fromRGBO(138, 190, 201, 1),
        shape: const CircleBorder(),
        child: const Icon(
          Icons.edit,
          color: Colors.white,
          fill: 1,
        ),
      ),
    );
  }
}

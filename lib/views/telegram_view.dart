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
          chatCard(),
          chatCard(),
          chatCard(),
          chatCard(),
          chatCard(),
          chatCard(),
          chatCard(),
          chatCard(),
          chatCard(),
        ],
      ),
      drawer: const Placeholder(),
    );
  }

  Container chatCard() {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 5),
      child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            CircleAvatar(
              backgroundImage: NetworkImage(
                genrateRandomImage(),
              ),
            ),
            const Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('JavaScript Channel',
                    style: TextStyle(
                      color: Colors.white,
                    )),
                Row(
                  children: [
                    Text('Kushagra:',
                        style: TextStyle(
                          color: Colors.white,
                        )),
                    Text('I think you should try doi...',
                        style: TextStyle(
                          color: Colors.white,
                        )),
                  ],
                ),
              ],
            ),
            Column(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                const Text("8:13 AM",
                    style: TextStyle(
                      color: Colors.white,
                    )),
                Container(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 4, vertical: 2),
                  decoration: const BoxDecoration(
                      color: Color.fromRGBO(69, 69, 69, 1),
                      borderRadius: BorderRadius.all(Radius.circular(10))),
                  child: const Text("1421",
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 12,
                      )),
                ),
              ],
            )
          ]),
    );
  }
}

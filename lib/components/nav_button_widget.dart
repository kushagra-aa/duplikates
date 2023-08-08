import 'package:flutter/material.dart';

class NavButton extends StatelessWidget {
  const NavButton(
      {super.key,
      required this.text,
      required this.route,
      required this.backgroundColor,
      this.foregroundColor = Colors.white});
  final String text;
  final String route;
  final Color backgroundColor;
  final Color foregroundColor;

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      style: ElevatedButton.styleFrom(
        backgroundColor: backgroundColor,
        foregroundColor: foregroundColor,
        minimumSize: const Size.fromHeight(50),
      ),
      onPressed: () {
        Navigator.of(context).pushNamed(route);
      },
      child: Text(text),
    );
  }
}

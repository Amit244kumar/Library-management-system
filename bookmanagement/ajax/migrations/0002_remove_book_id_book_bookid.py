# Generated by Django 4.0.4 on 2022-07-30 17:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ajax', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='id',
        ),
        migrations.AddField(
            model_name='book',
            name='bookId',
            field=models.IntegerField(default=True, primary_key=True, serialize=False),
        ),
    ]

# -*- coding: utf-8 -*-
# Generated by Django 1.11.14 on 2018-10-05 16:12
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailpages', '0038_auto_20180920_1100'),
    ]

    operations = [
        migrations.CreateModel(
            name='StoriesPage',
            fields=[
                ('primarypage_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailpages.PrimaryPage')),
            ],
            options={
                'abstract': False,
            },
            bases=('wagtailpages.primarypage',),
        ),
    ]
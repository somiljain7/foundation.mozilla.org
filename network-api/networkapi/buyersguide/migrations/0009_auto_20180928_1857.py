# -*- coding: utf-8 -*-
# Generated by Django 1.11.14 on 2018-09-28 18:57
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('buyersguide', '0008_auto_20180928_1856'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='privacy_policy_reading_level',
            field=models.CharField(blank='True', choices=[(None, "Can't Determine"), ('0', 'Grade 8-12'), ('1', 'Grade 13+')], default=None, max_length=1),
        ),
    ]

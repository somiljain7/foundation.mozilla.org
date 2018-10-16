# -*- coding: utf-8 -*-
# Generated by Django 1.11.16 on 2018-10-16 20:05
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('buyersguide', '0007_auto_20181012_2045'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='slug',
            field=models.SlugField(blank=True, help_text='What should this product look like in a URL?', max_length=256),
        ),
        migrations.AlterField(
            model_name='product',
            name='blurb',
            field=models.TextField(blank=True, help_text='Description of the product', max_length=5000),
        ),
        migrations.AlterField(
            model_name='product',
            name='child_rules_helptext',
            field=models.TextField(blank=True, max_length=5000),
        ),
        migrations.AlterField(
            model_name='product',
            name='company',
            field=models.CharField(blank=True, help_text='Name of Company', max_length=100),
        ),
        migrations.AlterField(
            model_name='product',
            name='delete_data_helptext',
            field=models.TextField(blank=True, max_length=5000),
        ),
        migrations.AlterField(
            model_name='product',
            name='email',
            field=models.CharField(blank=True, help_text='Email', max_length=100),
        ),
        migrations.AlterField(
            model_name='product',
            name='live_chat',
            field=models.CharField(blank=True, help_text='Live Chat', max_length=100),
        ),
        migrations.AlterField(
            model_name='product',
            name='manage_security_helptext',
            field=models.TextField(blank=True, max_length=5000),
        ),
        migrations.AlterField(
            model_name='product',
            name='must_change_default_password_helptext',
            field=models.TextField(blank=True, max_length=5000),
        ),
        migrations.AlterField(
            model_name='product',
            name='name',
            field=models.CharField(blank=True, help_text='Name of Product', max_length=100),
        ),
        migrations.AlterField(
            model_name='product',
            name='need_account_helptext',
            field=models.TextField(blank=True, max_length=5000),
        ),
        migrations.AlterField(
            model_name='product',
            name='phone_number',
            field=models.CharField(blank=True, help_text='Phone Number', max_length=100),
        ),
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.CharField(blank=True, help_text='Price', max_length=100),
        ),
        migrations.AlterField(
            model_name='product',
            name='privacy_policy_helptext',
            field=models.TextField(blank=True, max_length=5000),
        ),
        migrations.AlterField(
            model_name='product',
            name='privacy_policy_url',
            field=models.URLField(blank=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='security_updates_helptext',
            field=models.TextField(blank=True, max_length=5000),
        ),
        migrations.AlterField(
            model_name='product',
            name='share_data_helptext',
            field=models.TextField(blank=True, max_length=5000),
        ),
        migrations.AlterField(
            model_name='product',
            name='twitter',
            field=models.CharField(blank=True, help_text='Twitter username', max_length=100),
        ),
        migrations.AlterField(
            model_name='product',
            name='url',
            field=models.URLField(blank=True, help_text='Link to this product page', max_length=2048),
        ),
        migrations.AlterField(
            model_name='product',
            name='uses_encryption_helptext',
            field=models.TextField(blank=True, max_length=5000),
        ),
        migrations.AlterField(
            model_name='product',
            name='worst_case',
            field=models.CharField(blank=True, help_text="What's the worst thing that could happen by using this product?", max_length=5000),
        ),
        migrations.AlterField(
            model_name='update',
            name='author',
            field=models.CharField(blank=True, max_length=256),
        ),
        migrations.AlterField(
            model_name='update',
            name='snippet',
            field=models.TextField(blank=True, max_length=5000),
        ),
        migrations.AlterField(
            model_name='update',
            name='source',
            field=models.CharField(blank=True, max_length=256),
        ),
        migrations.AlterField(
            model_name='update',
            name='title',
            field=models.CharField(blank=True, max_length=256),
        ),
    ]

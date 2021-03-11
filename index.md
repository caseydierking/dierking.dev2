---
layout: home.njk
title: Text Decoration
date: 2021-03-08
pagination:
  data: collections.blog
  size: 2
  alias: posts
---


{% for post in posts %}
  <div class="text-2xl font-extrabold"><a href="{{ post.url | url }}">{{ post.data.title }}</a></div>
   <span class="text-base text-sm font-normal"> &middot; {{ post.templateContent }} min read</span>
{% endfor %}

{% if pagination.href.previous %}
  <a href="{{pagination.href.previous}}">Previous Page</a>
{% endif %}
{% if pagination.href.next %}
  <a href="{{pagination.href.next}}">Next Page</a>
{% endif %}



---
layout: archive
permalink: /
title: "Latest Posts"
---

<div class="tiles">
{% if site.posts.size != 0 %}
	{% for post in site.posts %}
		{% include post-list.html %}
	{% endfor %}
{% else %}
New posts are coming soon!
{% endif %}
</div><!-- /.tiles -->

---
aliases: []
hide_menu: true
labels:
  products:
    - cloud
    - enterprise
    - oss
title: Release notes for Grafana 8.5.5
---

<!-- Auto generated by update changelog github action -->

# Release notes for Grafana 8.5.5

### Features and enhancements

- **Azure Monitor:** Include datasource ref when interpolating variables. [#49543](https://github.com/grafana/grafana/pull/49543), [@kevinwcyu](https://github.com/kevinwcyu)
- **CloudWatch:** Add multi-value template variable support for log group names in logs query builder. [#49737](https://github.com/grafana/grafana/pull/49737), [@kevinwcyu](https://github.com/kevinwcyu)
- **Cloudwatch:** Add template variable query function for listing log groups. [#50100](https://github.com/grafana/grafana/pull/50100), [@yaelleC](https://github.com/yaelleC)

### Bug fixes

- **Alerting:** Do not overwrite existing alert rule condition. [#49920](https://github.com/grafana/grafana/pull/49920), [@gillesdemey](https://github.com/gillesdemey)
- **Alerting:** Remove double quotes from matchers. [#50044](https://github.com/grafana/grafana/pull/50044), [@alexweav](https://github.com/alexweav)

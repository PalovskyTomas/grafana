---
aliases: []
hide_menu: true
labels:
  products:
    - cloud
    - enterprise
    - oss
title: Release notes for Grafana 9.1.3
---

<!-- Auto generated by update changelog github action -->

# Release notes for Grafana 9.1.3

### Features and enhancements

- **API:** Do not expose user input in datasource error responses. [#53483](https://github.com/grafana/grafana/pull/53483), [@papagian](https://github.com/papagian)
- **Alerting:** Write and Delete multiple alert instances. [#54072](https://github.com/grafana/grafana/pull/54072), [@joeblubaugh](https://github.com/joeblubaugh)
- **Library Panel:** Allow to delete them when deprecated. [#54662](https://github.com/grafana/grafana/pull/54662), [@ivanortegaalba](https://github.com/ivanortegaalba)
- **Plugins Catalog:** Allow to filter plugins using special characters. [#54474](https://github.com/grafana/grafana/pull/54474), [@murtazaqa](https://github.com/murtazaqa)

### Bug fixes

- **Alerting:** Fix UI bug when setting custom notification policy group by. [#54607](https://github.com/grafana/grafana/pull/54607), [@JacobsonMT](https://github.com/JacobsonMT)
- **AppRootPage:** Fix issue navigating between two app plugin pages. [#54519](https://github.com/grafana/grafana/pull/54519), [@torkelo](https://github.com/torkelo)
- **Correlations:** Use correct fallback handlers. [#54511](https://github.com/grafana/grafana/pull/54511), [@kalleep](https://github.com/kalleep)
- **FIX:** RBAC prevents deleting empty snapshots (#54385). [#54510](https://github.com/grafana/grafana/pull/54510), [@gamab](https://github.com/gamab)
- **LibraryElements:** Fix inability to delete library panels under MySQL. [#54600](https://github.com/grafana/grafana/pull/54600), [@kaydelaney](https://github.com/kaydelaney)
- **Metrics:** fix `grafana_database_conn_*` metrics, and add new `go_sql_stats_*` metrics as eventual replacement. [#54405](https://github.com/grafana/grafana/pull/54405), [@hairyhenderson](https://github.com/hairyhenderson)
- **TestData DB:** Fix node graph not showing when the `Data type` field is set to `random`. [#54298](https://github.com/grafana/grafana/pull/54298), [@CrypticSignal](https://github.com/CrypticSignal)

### Deprecations

The `grafana_database_conn_*` metrics are deprecated, and will be removed in a future version of Grafana. Use the `go_sql_stats_*` metrics instead. Issue [#54405](https://github.com/grafana/grafana/issues/54405)

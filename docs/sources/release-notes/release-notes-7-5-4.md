---
_build:
  list: false
labels:
  products:
    - cloud
    - enterprise
    - oss
title: Release notes for Grafana 7.5.4
---

<!-- Auto generated by update changelog github action -->

# Release notes for Grafana 7.5.4

### Features and enhancements

- **Auditing:** Use nanosecond resolution for audit log timestamps. (Enterprise)
- **AzureMonitor:** Add support for Microsoft.AppConfiguration/configurationStores namespace. [#32123](https://github.com/grafana/grafana/pull/32123), [@deesejohn](https://github.com/deesejohn)
- **TablePanel:** Make sorting case-insensitive. [#32435](https://github.com/grafana/grafana/pull/32435), [@kaydelaney](https://github.com/kaydelaney)

### Bug fixes

- **AzureMonitor:** Add support for Virtual WAN namespaces. [#32935](https://github.com/grafana/grafana/pull/32935), [@joshhunt](https://github.com/joshhunt)
- **Bugfix:** Add proper padding when scrolling is added to bar gauge. [#32411](https://github.com/grafana/grafana/pull/32411), [@mckn](https://github.com/mckn)
- **Datasource:** Prevent default data source named "default" from causing infinite loop. [#32949](https://github.com/grafana/grafana/pull/32949), [@jackw](https://github.com/jackw)
- **Prometheus:** Allow exemplars endpoint in data source proxy. [#32802](https://github.com/grafana/grafana/pull/32802), [@zoltanbedi](https://github.com/zoltanbedi)
- **Table:** Fix table data links so they refer to correct row after sorting. [#32571](https://github.com/grafana/grafana/pull/32571), [@torkelo](https://github.com/torkelo)

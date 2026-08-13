# Third-Party Notices

The preset colorschemes in this plugin are adapted from the following
MIT-licensed open-source color themes. Each preset's palette is mapped onto
the DeepSeek Harness `--dsw-*` semantic token system; the mapping code and
this plugin's own code are MIT-licensed (see [LICENSE](LICENSE)), and the
original palettes remain the work of their respective authors, reproduced
under the licenses below.

| Preset id            | Name              | Author / project                                                              | License | Source |
| -------------------- | ----------------- | ----------------------------------------------------------------------------- | ------- | ------ |
| `vscode-dark`        | VS Code Dark      | Microsoft Corporation (VS Code "Dark Modern")                                 | MIT     | https://github.com/microsoft/vscode |
| `vscode-light`       | VS Code Light     | Microsoft Corporation (VS Code "Light Modern")                                | MIT     | https://github.com/microsoft/vscode |
| `dracula`            | Dracula           | Zeno Rocha / Dracula Theme                                                    | MIT     | https://github.com/dracula/visual-studio-code |
| `nord`               | Nord              | Arctic Ice Studio (Sven Greb)                                                 | MIT     | https://github.com/arcticicestudio/nord-visual-studio-code |
| `one-dark`           | One Dark          | GitHub / Atom                                                                 | MIT     | https://github.com/atom/one-dark-syntax |
| `one-light`          | One Light         | GitHub / Atom                                                                 | MIT     | https://github.com/atom/one-light-syntax |
| `tokyo-night`        | Tokyo Night Storm | Tomas Pustelnik (Enkia)                                                       | MIT     | https://github.com/enkia/tokyo-night-vscode-theme |
| `catppuccin-mocha`   | Catppuccin Mocha  | Catppuccin Org                                                                | MIT     | https://github.com/catppuccin/palette |

The full license texts are in [`presets-licenses/`](presets-licenses/).

If you add a preset to `src/themes/presets.ts`, add a row to the table above,
drop the license text into `presets-licenses/`, and keep the `meta` fields
(`author`, `license`, `source`) on the preset entry.

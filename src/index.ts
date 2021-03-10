import { Command, flags } from '@oclif/command'
import fetch from 'node-fetch'
import { load } from 'cheerio'

class WpDetect extends Command {
  static description = 'scan given URL for plugins and themes'

  static flags = {
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
    format: flags.string({
      description: 'format for output',
      options: ['simple','json'],
      char: 'f',
      default: 'table'
    }),
    url: flags.string({ description: 'url to scan' }),
  }

  static args = [{ name: 'url' }]

  async run() {
    const { args, flags } = this.parse(WpDetect)

    const url: string = args.url || flags.url || '';

    if (url.length === 0) {
      this._help();
      return;
    }

    fetch(url)
      .then(res => res.text())
      .then(body => {

        const $ = load(body);
        const scripts = $('script,link,style')
        const html = $.html(scripts);
        const regex = /\/(themes|plugins)\/[a-z0-9-_\.:]*\//gm;

        let m;
        let plugins: Iterable<any> | null | undefined = [];
        let themes: Iterable<any> | null | undefined = [];

        while ((m = regex.exec(html)) !== null) {
          if (m.index === regex.lastIndex) {
            regex.lastIndex++;
          }
          const slug = m[0].replace(m[1],'').replace(/\\/g,'').replace(/\//g,'')
          if ( m[1] === 'themes' ) {
            themes = Array.from(new Set([slug, ...themes]));
          } else {
            plugins = Array.from(new Set([slug, ...plugins]));
          }
        }
        const pluginsAndThemes = {
          "plugins": plugins,
          "themes": themes,
        }

        switch (flags.format) {
          case 'json':
            console.log( JSON.stringify( pluginsAndThemes ) );
            break;
          default: // case 'table'

            console.log( "== PLUGINS ==" );
            for( let plugin of plugins ) {
              console.log( `${plugin}`)
            }
            console.log( "== THEMES ==" );
            for( let theme of themes ) {
              console.log( `${theme}`)
            }
            break;
        }

      });
  }
}

export = WpDetect

require 'pry'

module Jekyll
  class Pry < Liquid::Tag

    def initialize(tag_name, text, tokens)
      # binding.pry
      super
      @text = text
    end

    def render(context)
      p = context.environments[0].site.html_pages[0]
      binding.pry
    end
  end
end

Liquid::Template.register_tag('pry', Jekyll::Pry)
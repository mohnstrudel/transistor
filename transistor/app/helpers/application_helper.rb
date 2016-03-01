module ApplicationHelper

	def link_to_add_fields(name, f, association)
		new_object = f.object.send(association).klass.new
		id = new_object.object_id
		fields = f.fields_for(association, new_object, child_index: id) do |builder|
			render(association.to_s.singularize + "_fields", f: builder)
		end
		link_to(name, '#', class: 'add_fields', data: {id: id, fields: fields.gsub("\n", "")})
	end

	def image_or_default(object)
		if object.images.any?
			return image_tag(object.images.first.image.url, size: "270x380")
		else
			return image_tag("default.png", size: "270x380")
		end
	end

	def style_first_div(number, &block)
		if number.even?
			return content_tag('div', class: "col-md-3 col-sm-4", &block)
		else
			return content_tag('div', class: "col-md-3 col-sm-4 col-md-push-9 col-sm-push-8", &block)
		end
	end

	def style_second_div(number, &block)
		if number.even?
			return content_tag('div', class: "col-md-9 col-sm-8", &block)
		else
			return content_tag('div', class: "col-md-9 col-sm-8 col-md-pull-3 col-sm-pull-4", &block)
		end

	end

	def russianize(number)
		if number == 1
			return ""
		elsif number.between?(2,4)
			return "а"
		else
			return 'ов'
		end
	end
end

class Bench < ActiveRecord::Base

  def self.in_bounds(bounds)
    out = []
    self.all.each do |bench|
      if bench.lat.between?(bounds['southWest']['lat'].to_f, bounds['northEast']['lat'].to_f)
        if bench.lng.between?(bounds['southWest']['lng'].to_f, bounds['northEast']['lng'].to_f)
          out << bench
        end
      end
    end
    return out
  end

end
